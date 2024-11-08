import { FormEvent, useState } from "react";
import { Button, Input } from "../../../components";
import { AiOutlineSmile } from "react-icons/ai";
import { BiCalendarCheck } from "react-icons/bi";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";
import { HiOutlineEmojiSad } from "react-icons/hi";

import { useNotification } from "../../../contexts";
import { addDoc, getDbRef } from "../../../firebase";
import { Confirmation } from "./types";

import { ConfirmationContainer, ButtonsConfirmationContainer } from "./style";

export function ConfirmationForm() {
  const { openNotification } = useNotification();

  const [confirmation, setConfirmation] = useState({} as Confirmation);
  const [error, setError] = useState(false);

  const confirmationButtonError = error && !confirmation.answer;

  function handleConfirmationAnswer(answer: string) {
    setConfirmation((prevState) => ({ ...prevState, answer }));
  }

  function handleTypeButton(answer: string) {
    return answer === confirmation.answer ? "primary" : "default";
  }

  function handleNotificationMessage(answer: string) {
    if (answer === "não") return "Ah, que pena!";
    if (answer === "não sei") return "Ok, aguardo sua confirmação!";
    return "Oba! Nos vemos dia 07/12.";
  }

  async function handleConfirmationPresence(ev: FormEvent, data: Confirmation) {
    ev.preventDefault();

    if (!data.name || !data.answer) {
      setError(true);
      return;
    }

    const dbRef = getDbRef("confirmation-list");
    const today = new Date().toLocaleDateString("pt-BR");

    try {
      await addDoc(dbRef, { ...data, today });

      openNotification(
        "Confirmação adicionada",
        handleNotificationMessage(data.answer)
      );
    } catch (error) {
      console.log(error);
    }

    setConfirmation({ name: "", answer: "" });
    setError(false);
  }

  return (
    <ConfirmationContainer
      onSubmit={(ev) => handleConfirmationPresence(ev, confirmation)}
    >
      <p>
        <BiCalendarCheck /> Confirmação de Presença
      </p>

      <Input
        status={error && !confirmation.name ? "error" : ""}
        placeholder="Nome"
        name="name"
        value={confirmation.name}
        exec={setConfirmation}
      />

      <ButtonsConfirmationContainer>
        <Button
          type={handleTypeButton("sim")}
          icon={<AiOutlineSmile />}
          onClick={() => handleConfirmationAnswer("sim")}
          danger={confirmationButtonError}
        >
          Claro que eu vou
        </Button>

        <Button
          type={handleTypeButton("não")}
          icon={<HiOutlineEmojiSad />}
          onClick={() => handleConfirmationAnswer("não")}
          danger={confirmationButtonError}
        >
          Desculpa, não vou
        </Button>

        <Button
          type={handleTypeButton("não sei")}
          icon={<BsEmojiSmileUpsideDown />}
          onClick={() => handleConfirmationAnswer("não sei")}
          danger={confirmationButtonError}
        >
          Ainda não sei
        </Button>
      </ButtonsConfirmationContainer>

      <Button htmlType="submit" type="link">
        Enviar confirmação
      </Button>
    </ConfirmationContainer>
  );
}
