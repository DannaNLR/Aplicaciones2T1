-- CreateTable
CREATE TABLE "Rol" (
    "idrol" SERIAL NOT NULL,
    "rol" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Rol_pkey" PRIMARY KEY ("idrol")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "CI" INTEGER NOT NULL,
    "idrol" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("CI")
);

-- CreateTable
CREATE TABLE "ComentarioProducto" (
    "idcomentario" SERIAL NOT NULL,
    "idproducto" INTEGER NOT NULL,
    "CI" INTEGER NOT NULL,
    "comentario" TEXT NOT NULL,

    CONSTRAINT "ComentarioProducto_pkey" PRIMARY KEY ("idcomentario")
);

-- CreateTable
CREATE TABLE "Direccion" (
    "id_direccion" SERIAL NOT NULL,
    "CI" INTEGER NOT NULL,
    "id_ciudad" INTEGER NOT NULL,
    "id_referencia" INTEGER NOT NULL,

    CONSTRAINT "Direccion_pkey" PRIMARY KEY ("id_direccion")
);

-- CreateTable
CREATE TABLE "Ciudad" (
    "id_ciudad" SERIAL NOT NULL,
    "ciudad" TEXT NOT NULL,

    CONSTRAINT "Ciudad_pkey" PRIMARY KEY ("id_ciudad")
);

-- CreateTable
CREATE TABLE "Referencia" (
    "id_referencia" SERIAL NOT NULL,
    "calle_principal" TEXT NOT NULL,
    "numero_casa" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Referencia_pkey" PRIMARY KEY ("id_referencia")
);

-- CreateTable
CREATE TABLE "Producto" (
    "idproducto" SERIAL NOT NULL,
    "idCategoria" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "precio" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("idproducto")
);

-- CreateTable
CREATE TABLE "Foto" (
    "idfoto" SERIAL NOT NULL,
    "idproducto" INTEGER NOT NULL,
    "archivo" TEXT NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "Foto_pkey" PRIMARY KEY ("idfoto")
);

-- CreateTable
CREATE TABLE "Marca" (
    "idmarca" SERIAL NOT NULL,
    "idproducto" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Marca_pkey" PRIMARY KEY ("idmarca")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "idCategoria" SERIAL NOT NULL,
    "descuento" INTEGER NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "nombreCategoria" TEXT NOT NULL,
    "idSubCategoria" INTEGER,
    "idCaracteristica" INTEGER,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("idCategoria")
);

-- CreateTable
CREATE TABLE "SubCategoria" (
    "idSubCategoria" SERIAL NOT NULL,
    "color" TEXT NOT NULL,
    "talla" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "SubCategoria_pkey" PRIMARY KEY ("idSubCategoria")
);

-- CreateTable
CREATE TABLE "Caracteristica" (
    "idCaracteristica" SERIAL NOT NULL,
    "nombreCaracteristica" TEXT NOT NULL,
    "descripcionCaracteristica" TEXT NOT NULL,

    CONSTRAINT "Caracteristica_pkey" PRIMARY KEY ("idCaracteristica")
);

-- CreateTable
CREATE TABLE "Repartidor" (
    "id_repartidor" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Telefono" TEXT NOT NULL,
    "Correo" TEXT NOT NULL,
    "Cedula" TEXT NOT NULL,

    CONSTRAINT "Repartidor_pkey" PRIMARY KEY ("id_repartidor")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "idpedido" SERIAL NOT NULL,
    "CI" INTEGER NOT NULL,
    "id_repartidor" INTEGER NOT NULL,
    "Fecha" TIMESTAMP(3) NOT NULL,
    "Total" DOUBLE PRECISION NOT NULL,
    "entregado" BOOLEAN NOT NULL,
    "direccion_envio" TEXT NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("idpedido")
);

-- CreateTable
CREATE TABLE "DetallePedido" (
    "iddetalle" SERIAL NOT NULL,
    "idpedido" INTEGER NOT NULL,
    "idproducto" INTEGER NOT NULL,
    "Cantidad" INTEGER NOT NULL,
    "Precio" DOUBLE PRECISION NOT NULL,
    "Subtotal" DOUBLE PRECISION NOT NULL,
    "Costo_envio" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "DetallePedido_pkey" PRIMARY KEY ("iddetalle")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_CI_key" ON "Cliente"("CI");

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_idrol_fkey" FOREIGN KEY ("idrol") REFERENCES "Rol"("idrol") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComentarioProducto" ADD CONSTRAINT "ComentarioProducto_idproducto_fkey" FOREIGN KEY ("idproducto") REFERENCES "Producto"("idproducto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComentarioProducto" ADD CONSTRAINT "ComentarioProducto_CI_fkey" FOREIGN KEY ("CI") REFERENCES "Cliente"("CI") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Direccion" ADD CONSTRAINT "Direccion_CI_fkey" FOREIGN KEY ("CI") REFERENCES "Cliente"("CI") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Direccion" ADD CONSTRAINT "Direccion_id_ciudad_fkey" FOREIGN KEY ("id_ciudad") REFERENCES "Ciudad"("id_ciudad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Direccion" ADD CONSTRAINT "Direccion_id_referencia_fkey" FOREIGN KEY ("id_referencia") REFERENCES "Referencia"("id_referencia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categoria"("idCategoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Foto" ADD CONSTRAINT "Foto_idproducto_fkey" FOREIGN KEY ("idproducto") REFERENCES "Producto"("idproducto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Marca" ADD CONSTRAINT "Marca_idproducto_fkey" FOREIGN KEY ("idproducto") REFERENCES "Producto"("idproducto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categoria" ADD CONSTRAINT "Categoria_idSubCategoria_fkey" FOREIGN KEY ("idSubCategoria") REFERENCES "SubCategoria"("idSubCategoria") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categoria" ADD CONSTRAINT "Categoria_idCaracteristica_fkey" FOREIGN KEY ("idCaracteristica") REFERENCES "Caracteristica"("idCaracteristica") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_id_repartidor_fkey" FOREIGN KEY ("id_repartidor") REFERENCES "Repartidor"("id_repartidor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_CI_fkey" FOREIGN KEY ("CI") REFERENCES "Cliente"("CI") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallePedido" ADD CONSTRAINT "DetallePedido_idpedido_fkey" FOREIGN KEY ("idpedido") REFERENCES "Pedido"("idpedido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallePedido" ADD CONSTRAINT "DetallePedido_idproducto_fkey" FOREIGN KEY ("idproducto") REFERENCES "Producto"("idproducto") ON DELETE RESTRICT ON UPDATE CASCADE;
