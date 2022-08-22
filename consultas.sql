# a - Obtener el auto mas caro (*Pueden ser varios*)
SELECT * FROM autos WHERE precio = (SELECT MAX(precio) FROM autos);

# b - Obtener el auto mas viejo (*Pueden ser varios*)
SELECT * FROM autos WHERE modelo = (SELECT MIN(modelo) FROM autos);

# c - Los autos que comienzan en su patente con X Valor
SET @VALOR = 'LA';
SELECT * FROM autos WHERE patente LIKE CONCAT(@VALOR, '%');

# d - Los autos que superen determinado monto
SET @MONTO = 455555;
SELECT * FROM autos WHERE precio > @MONTO;

# e - Los autos que tengan seguro
SELECT * FROM autos WHERE seguro = true;
