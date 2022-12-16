import React from "react";
import Modal from "react-modal";
import Wrapper from "../../../../../components/wrapper";
import InputForm from "../../../criar/components/form-input";
import FormTextArea from "../../../criar/components/form-text-area";
import { SubmitBtn } from "./styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#__next");

function ModalOffer({
  isModalOfferOpen,
  onToggleModaOffer,
  service,
  onSubmit,
}) {
  return (
    <Modal
      isOpen={isModalOfferOpen}
      style={customStyles}
      onRequestClose={onToggleModaOffer}
      contentLabel="Offer Modal"
    >
      <Wrapper flex column>
        <strong>{service.name}</strong>
        <Wrapper padding="8px 0 8px 0">
          Faça sua proposta por este serviço
        </Wrapper>
        <Wrapper flex row>
          <form action="submit" name="offer-form" onSubmit={onSubmit}>
            <InputForm
              type={"number"}
              inputId={"offered-price"}
              required={true}
              inputName={"offered-price"}
              formName={"offer-form"}
              inputLabel="Valor da propsta*"
              inputPlaceholder="Digite o valor"
            />

            <FormTextArea
              formName={"offer-form"}
              required={false}
              textAreaId={"offer-description"}
              textAreaLabel={"Descrição da Proposta"}
              textAreaName={"offer-description"}
            />

            <SubmitBtn type="submit">Fazer proposta</SubmitBtn>
          </form>
        </Wrapper>
      </Wrapper>
    </Modal>
  );
}

export default ModalOffer;
