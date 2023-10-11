package main

import (
	"fmt"
	"log"
	"net/http"
	"webapp/src/router"
	"webapp/src/utils"
)

func main() {
	r := router.Gerar()
	utils.CarregarTemplates()

	fmt.Println("Rodando WEBAPP na porta 3000")
	log.Fatal(http.ListenAndServe(":3000", r))
}
