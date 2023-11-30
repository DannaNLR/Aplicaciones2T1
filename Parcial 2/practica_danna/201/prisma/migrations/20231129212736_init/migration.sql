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
    "CI" INTEGER NOT NULL,
    "comentario" TEXT NOT NULL,

    CONSTRAINT "ComentarioProducto_pkey" PRIMARY KEY ("idcomentario")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_CI_key" ON "Cliente"("CI");

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_idrol_fkey" FOREIGN KEY ("idrol") REFERENCES "Rol"("idrol") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComentarioProducto" ADD CONSTRAINT "ComentarioProducto_CI_fkey" FOREIGN KEY ("CI") REFERENCES "Cliente"("CI") ON DELETE RESTRICT ON UPDATE CASCADE;
