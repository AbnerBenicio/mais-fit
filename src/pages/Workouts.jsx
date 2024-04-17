import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/api";
import "./Workout.css"

function Workouts() {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [nomeTreino, setNomeTreino] = useState("");
  const [diaSemana, setDiaSemana] = useState("");
  const [treinos, setTreinos] = useState();
  const diasSemana = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado", "domingo"]

  useEffect(() => {
    const fetchApi = async () => {
      const res = await API.get("workout");
      setTreinos(res.data);
    };

    fetchApi();
  }, []);

  const handleDelete = async (idTreino) => {
    try {
      const res = await API.delete(`workout/${idTreino}`);
      setTreinos((prevTreinos) =>
        prevTreinos.filter((treino) => treino.id !== res.data.id)
      );
      alert(
        `Exclusão do exercício ${res.data.name.toUpperCase()} feita com sucesso!`
      );
    } catch (err) {
      alert("Falha ao excluir exercício");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existe = treinos.some(
      (treino) =>
        treino.name == nomeTreino.toLowerCase() && treino.dia == diaSemana
    );

    if (!existe) {
      if (nomeTreino != "") {
        const treino = {
          name: nomeTreino.toLowerCase(),
          dia: diaSemana,
          fk_usuario_id: id,
        };
        setNomeTreino("");
        setDiaSemana("");
        setModalOpen(false);
        
        const res = await API.post("workout", treino);
        setTreinos((prev) => [...prev, res.data]);
      } else {
        alert("O treino precisa ter um nome!");
      }
    } else {
      alert("Você já adicionou esse treino nesse dia");
    }
  };

  return (
    <div className="workouts">

        {/* {diasSemana.map(dia => (

        ))} */}
      {modalOpen && (
        <div className="modal-adicionar">
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nome do exercício:</span>
              <input
                type="text"
                name="treino"
                id="treino"
                placeholder="Digite o nome do exercício"
                onChange={(e) => setNomeTreino(e.target.value)}
                value={nomeTreino}
              />
            </label>
            <p>{diaSemana}</p>
            <button type="submit">Enviar</button>
            <button
              onClick={() => {
                setNomeTreino("");
                setDiaSemana(""), setModalOpen(false);
              }}
            >
              Cancelar
            </button>
          </form>
        </div>
      )}

      <div className="content segunda-feira">
        <div className="card-day">
          <h2>SEGUNDA-FEIRA</h2>
          <button
            onClick={() => {
              setModalOpen(true);
              setDiaSemana("segunda-feira");
            }}
          >
            +
          </button>
        </div>
        <div className="treinos segunda">
          {treinos &&
            treinos.map((treino) => {
              if (treino.dia == "segunda-feira" && treino.fk_usuario_id == id) {
                return (
                  <div key={treino.id} className="exercicio">
                    <h3>{treino.name.toUpperCase()}</h3>
                    <button onClick={() => handleDelete(treino.id)}>X</button>
                  </div>
                );
              }
            })}
        </div>
      </div>
      <div className="content terca-feira">
        <div className="card-day">
          <h2>TERÇA-FEIRA</h2>
          <button
            onClick={() => {
              setModalOpen(true);
              setDiaSemana("terça-feira");
            }}
          >
            +
          </button>
        </div>
        <div className="treinos terca">
          {treinos &&
            treinos.map((treino) => {
              if (treino.dia == "terça-feira" && treino.fk_usuario_id == id) {
                return (
                  <div key={treino.id} className="exercicio">
                    <h3>{treino.name.toUpperCase()}</h3>
                    <button onClick={() => handleDelete(treino.id)}>X</button>
                  </div>
                );
              }
            })}
        </div>
      </div>
      <div className="content quarta-feira">
        <div className="card-day">
          <h2>QUARTA-FEIRA</h2>
          <button
            onClick={() => {
              setModalOpen(true);
              setDiaSemana("quarta-feira");
            }}
          >
            +
          </button>
        </div>
        <div className="treinos quarta">
          {treinos &&
            treinos.map((treino) => {
              if (treino.dia == "quarta-feira" && treino.fk_usuario_id == id) {
                return (
                  <div key={treino.id} className="exercicio">
                    <h3>{treino.name.toUpperCase()}</h3>
                    <button onClick={() => handleDelete(treino.id)}>X</button>
                  </div>
                );
              }
            })}
        </div>
      </div>
      <div className="content quinta-feira">
        <div className="card-day">
          <h2>QUINTA-FEIRA</h2>
          <button
            onClick={() => {
              setModalOpen(true);
              setDiaSemana("quinta-feira");
            }}
          >
            +
          </button>
        </div>
        <div className="treinos quinta">
          {treinos &&
            treinos.map((treino) => {
              if (treino.dia == "quinta-feira" && treino.fk_usuario_id == id) {
                return (
                  <div key={treino.id} className="exercicio">
                    <h3>{treino.name.toUpperCase()}</h3>
                    <button onClick={() => handleDelete(treino.id)}>X</button>
                  </div>
                );
              }
            })}
        </div>
      </div>
      <div className="content sexta-feira">
        <div className="card-day">
          <h2>SEXTA-FEIRA</h2>
          <button
            onClick={() => {
              setModalOpen(true);
              setDiaSemana("sexta-feira");
            }}
          >
            +
          </button>
        </div>
        <div className="treinos sexta">
          {treinos &&
            treinos.map((treino) => {
              if (treino.dia == "sexta-feira" && treino.fk_usuario_id == id) {
                return (
                  <div key={treino.id} className="exercicio">
                    <h3>{treino.name.toUpperCase()}</h3>
                    <button onClick={() => handleDelete(treino.id)}>X</button>
                  </div>
                );
              }
            })}
        </div>
      </div>
      <div className="content sabado">
        <div className="card-day">
          <h2>SÁBADO</h2>
          <button
            onClick={() => {
              setModalOpen(true);
              setDiaSemana("sábado");
            }}
          >
            +
          </button>
        </div>
        <div className="treinos sabado">
          {treinos &&
            treinos.map((treino) => {
              if (treino.dia == "sábado" && treino.fk_usuario_id == id) {
                return (
                  <div key={treino.id} className="exercicio">
                    <h3>{treino.name.toUpperCase()}</h3>
                    <button onClick={() => handleDelete(treino.id)}>X</button>
                  </div>
                );
              }
            })}
        </div>
      </div>
      <div className="content domingo">
        <div className="card-day">
          <h2>DOMINGO</h2>
          <button
            onClick={() => {
              setModalOpen(true);
              setDiaSemana("domingo");
            }}
          >
            +
          </button>
        </div>
        <div className="treinos domingo">
          {treinos &&
            treinos.map((treino) => {
              if (treino.dia == "domingo" && treino.fk_usuario_id == id) {
                return (
                  <div key={treino.id} className="exercicio">
                    <h3>{treino.name.toUpperCase()}</h3>
                    <button onClick={() => handleDelete(treino.id)}>X</button>
                  </div>
                );
              }
            })}
            
            
        </div>
      </div>
    </div>
  );
}

export default Workouts;
