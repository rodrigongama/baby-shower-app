import moment from "moment";
import { DisplayTime } from "../..";
import { Container } from "./style";

const DPP = moment("03/01/2025");
const today = moment();
const diffWeeks = DPP.diff(today, "week");
const diffDays = DPP.diff(today, "days");

export function Time() {
  function getTimeToBorn() {
    if (diffDays === 0) return "Ela nasceu!";

    if (diffWeeks === 0) {
      return `${diffDays} ${diffDays === 1 ? "dia" : "dias"}`;
    }

    return `${diffWeeks} ${diffWeeks === 1 ? "semana" : "semanas"}`;
  }

  return (
    <Container>
      <DisplayTime title="Tempo para o nascimento" time={getTimeToBorn()} />

      <DisplayTime
        title="Previsão de nascimento"
        time={DPP.format("DD/MM/YYYY")}
      />
    </Container>
  );
}
