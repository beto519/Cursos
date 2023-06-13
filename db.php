<?php
namespace Modelo;

use PDO as PDO;
use PDOStatement as PDOStatement;
use PDOException;

class DB
{
  public bool $autocommit = true;
  public PDO $link;

  function __construct($database = "cppsys")
  {
    $link = new PDO("mysql:host=gua-vm-11:3306;dbname=" . $database,
			            "cpp",
			            "cppadmin.1");

		$link->exec("set names utf8");

    $this->link = $link;
  }

  public function no_autocommit() : void
  {
    $this->link->beginTransaction();
  }
  public function commit() : bool
  {
    try
    {
      $this->link->commit();
      return true;
    }
    catch(PDOException $e)
    {
      error_log("Error en commit -> " . $e);
      return false;
    }
  }
  public function insertar(string $tabla, array $parametros) : int
  {
    $columns = "";
    $params  = "";
    $coma    = "";

    foreach ($parametros as $columna => $x) {
      $columns .= $coma .  "  " . $columna;
      $params  .= $coma .  " :" . $columna;
      $coma = " , ";
    }

    $query = sprintf("INSERT INTO
      %s
      (%s)
    VALUES
      (%s)", $tabla, $columns, $params);

    $response = $this->ejecutar($query, $parametros);
    if($response == 'ok')
    {
      return $this->link->lastInsertId();
    }
    print_r([
      "tabla" => $tabla,
      "parametros" => $parametros,
      "error" => $response
    ]);
    
    return 0;
    // return $response;

  }
  public function seleccionar(string $query, array $parametros = [], string $clase = '') : array
  {
    $stmt = $this->link->prepare($query);
    self::bindParams($stmt, $parametros);
    if(!$stmt->execute())
    {
      $error = $stmt->errorInfo();
      echo sprintf("<h1>%s</h1>", $error[2]);
      error_log($error[2]);
      return $error[2];
    }

    if($clase != '')
    {
      $stmt->setFetchMode(PDO::FETCH_CLASS, $clase);
    }
    return $stmt->fetchAll();
  }
  public function seleccionar_unico(string $query, int $id, string $clase = '')
  {
    $stmt = $this->link->prepare($query);
    self::bindParams($stmt, ["id" => $id]);
    if(!$stmt->execute())
    {
      $error = $stmt->errorInfo();
      echo sprintf("<h1>%s</h1>", $error[2]);
      error_log($error[2]);
      return $error[2];
    }
    if($clase != '')
    {
      $stmt->setFetchMode(PDO::FETCH_CLASS, $clase);
    }
    return $stmt->fetch();
  }
  public function seleccionar_unico_por_parametros(string $query, array $parametros = []) : array
  {
    $stmt = $this->link->prepare($query);
    self::bindParams($stmt, $parametros);
    if(!$stmt->execute())
    {
      $error = $stmt->errorInfo();
      echo sprintf("<h1>%s</h1>", $error[2]);
      error_log($error[2]);
      return $error[2];
    }
    $response =  $stmt->fetch();
    if($response == '') $response = [];
    return $response;

  }
  public function seleccionar_columna_por_parametros(string $query, array $parametros = []) : string
  {
    $stmt = $this->link->prepare($query);
    self::bindParams($stmt, $parametros);
    if(!$stmt->execute())
    {
      $error = $stmt->errorInfo();
      echo sprintf("<h1>%s</h1>", $error[2]);
      error_log($error[2]);
      return $error[2];
    }
    return $stmt->fetchColumn();
  }
  public function seleccionar_columna(string $tabla, array $parametros = [], string $columna = "id")
  {
    $where = "";
    foreach ($parametros as $column => $_)
    {
      $where .= sprintf(" AND %s = :%s ", $column, $column);
    }
    $query = sprintf("SELECT %s FROM %s WHERE activo = 1 %s", $columna, $tabla, $where);

    $stmt  = $this->link->prepare($query);
    self::bindParams($stmt, $parametros);
    if(!$stmt->execute())
    {
      $error = $stmt->errorInfo();
      echo sprintf("<h1>%s</h1>", $error[2]);
      error_log($error[2]);
      return $error[2];
    }
    return $stmt->fetchColumn();
  }
  public function editar(string $tabla, int $id, array $parametros) : string
  {
    $sets = $coma = "";

    foreach ($parametros as $p => $_)
    {
      $sets .= sprintf("%s %s = :%s", $coma, $p, $p);
      $coma = ",";
    }
    $parametros["id"] = $id;
    $query = sprintf("UPDATE
      %s
    SET
      %s
    WHERE
      id = :id", $tabla, $sets);
    return $this->ejecutar($query, $parametros);
  }
  public function editar_por_columna(string $tabla, string $columna, $valor, array $parametros) : string
  {
    $sets = $coma = "";

    foreach ($parametros as $p => $_)
    {
      $sets .= sprintf("%s %s = :%s", $coma, $p, $p);
      $coma = ",";
    }
    $parametros[$columna] = $valor;
    $query = sprintf("UPDATE
      %s
    SET
      %s
    WHERE
      %s = :%s", $tabla, $sets, $columna, $columna);
    return $this->ejecutar($query, $parametros);
  }

  public function baja(string $tabla, int $id) : string
  {
    return $this->editar($tabla,  $id, ["activo" => 0]);
  }
  public function delete_por_parametros(string $tabla, array $parametros) : string
  {
    $and    = "";
    $params = "";
    foreach($parametros as $columna => $valor)
    {
      $params .= sprintf(" %s %s = :%s ", $and, $columna, $columna);
      $and    = " AND ";
    }
    $query = sprintf("DELETE FROM %s WHERE %s" , $tabla, $params);
    return $this->ejecutar($query, $parametros);
  }
  public function ejecutar(string $query, array $params = []) :string
  {
    $stmt = $this->link->prepare($query);
    self::bindParams($stmt, $params);
    if(!$stmt->execute())
    {
      $error = $stmt->errorInfo();
      echo sprintf("<h1>%s</h1>", $error[2]);
      error_log($error[2]);
      return $error[2];
    }
    return 'ok';
  }
  private function bindParams(PDOStatement &$stmt, array $params) : void
  {
    foreach($params as $column => $value)
    {
      $stmt->bindValue(":" . $column, $value);
    }
  }
  function describir_columnas(string $tabla) : array
  {
    $stmt = $this->link->prepare(sprintf("DESCRIBE %s", $tabla));
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_COLUMN);
  }
}
