import React from "react";

export default function BannerMentorias() {
  return (
    <div className="App">
      <div class="container">
        <h1 class="font-weight-bold pt-5">Vamos encontrar seu mentor ideal</h1>
        <div className="row">
          <div className="col-xs-4">
            <div class="search mt-5">
              <i class="fa fa-search"></i>
              <div className="tamanho">
                <input
                  type="text-center"
                  class="form-control"
                  placeholder="Busque sua especialidade"
                />
              </div>
              <h2 className="pt-5 pb-4">Especialidades mais procuradas</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
