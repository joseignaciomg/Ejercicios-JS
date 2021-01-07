//2. You are trying to get from point B to point C. You can only move one block at a time. You can move up, down, left right. Write an algorithm to get from point B to point C.

var b = x2 + y8;
var c = x8 + y4;

var distancia = Math.sqrt( b*b + c*c ); // La  función Math.sqrt() retorna la raíz cuadrada de un número
var distancia = Math.hypot(a,b); // La función Math.hypot() retorna la raíz cuadrada de la suma de los cuadrados de sus argumentos