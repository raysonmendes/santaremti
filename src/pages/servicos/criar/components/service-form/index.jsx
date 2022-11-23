import React from "react";
import Wrapper from "../../../../../components/wrapper";
import InputForm from "../form-input";
import FormTextArea from "../form-text-area";
import { Container, SubmitBtn } from "./styles";

function ServiceForm({ user, onSubmit }) {
  return (
    <div>
      <form action="submit" name="service-form" onSubmit={onSubmit}>
        <Container>
          <InputForm
            type={"text"}
            inputId={"service-title"}
            required={true}
            inputName={"service-title"}
            formName={"service-form"}
            inputLabel="Título do serviço*"
            inputPlaceholder="Digite o título"
          />
          <FormTextArea
            formName={"service-form"}
            required={true}
            textAreaId={"service-description"}
            textAreaLabel={"Descrição do serviço*"}
            textAreaName={"service-description"}
          />
          <Wrapper
            row
            style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
          >
            <InputForm
              type={"number"}
              formName={"service-form"}
              inputId={"service-price"}
              inputLabel="Preço inicial do serviço (R$)"
              inputName={"service-price"}
            />
            <InputForm
              type={"date"}
              formName={"service-form"}
              inputId={"service-duo-date"}
              inputLabel="Prazo/Data do serviço"
              inputName={"service-duo-date"}
            />
          </Wrapper>

          <Wrapper padding>
            <SubmitBtn type="submit">Enviar</SubmitBtn>
          </Wrapper>
        </Container>
      </form>
    </div>
  );
}

export default ServiceForm;
