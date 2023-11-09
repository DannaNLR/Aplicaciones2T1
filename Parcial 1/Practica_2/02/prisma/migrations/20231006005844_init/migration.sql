-- CreateTable
CREATE TABLE "TipoCliente" (
    "idtipo" SERIAL NOT NULL,
    "tipocliente" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "TipoCliente_pkey" PRIMARY KEY ("idtipo")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "CI" INTEGER NOT NULL,
    "idtipo" INTEGER NOT NULL,
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

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_CI_key" ON "Cliente"("CI");

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_idtipo_fkey" FOREIGN KEY ("idtipo") REFERENCES "TipoCliente"("idtipo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComentarioProducto" ADD CONSTRAINT "ComentarioProducto_CI_fkey" FOREIGN KEY ("CI") REFERENCES "Cliente"("CI") ON DELETE RESTRICT ON UPDATE CASCADE;
