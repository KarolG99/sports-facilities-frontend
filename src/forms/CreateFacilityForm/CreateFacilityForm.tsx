import { Formik } from "formik";
import * as Yup from "yup";
import { styled } from "styled-components";

import FormField from "../../components/molecules/FormField";
import FormMap from "../../components/organisms/FormMap";
import { createFacility } from "../../serviceCalls/createFacility";
import { useState } from "react";
import ErrorMessage from "../../components/atoms/ErrorMessage/ErrorMessage";
import { ErrorMessagesType } from "../../components/atoms/ErrorMessage/types";
import { FacilityTypes } from "../../components/atoms/FacilityType";

const CreateFacilityForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isError, setIsError] = useState(false);

  const initialValues = {
    city: "",
    ZIPCode: "",
    address: "",
    purpose: "",
    email: "",
    password: "",
    description: "",
    googlePlusCode: "",
    latitude: null,
    longitude: null,
  };
  const validationSchema = Yup.object({
    city: Yup.string()
      .min(2, "Miejscowość musi zawierać conajmniej 2 znaki")
      .required("Pole wymagane"),
    ZIPCode: Yup.string()
      .min(6, "Kod pocztowy musi zawierać conajmniej 6 znaków")
      .required("Pole wymagane"),
    address: Yup.string()
      .min(4, "Adres musi zawierać conajmniej 4 znaki")
      .required("Pole wymagane"),
    purpose: Yup.string().required("Pole wymagane"),
    email: Yup.string()
      .email("Niepoprawny adres emial")
      .required("Pole wymagane"),
    password: Yup.string()
      .min(6, "Hasło musi zawierać conajmniej 6 znaków")
      .required("Pole wymagane"),
    description: Yup.string(),
    googlePlusCode: Yup.string(),
    latitude: Yup.number().required("Pole wymagane"),
    longitude: Yup.number().required("Pole wymagane"),
  });

  const purposeOptions = [
    { value: "", label: "Wybierz" },
    { value: FacilityTypes.TENNIS, label: "Tenis" },
    { value: FacilityTypes.SOCCER, label: "Piłka nożna" },
    { value: FacilityTypes.BASKETBALL, label: "Koszykówka" },
    { value: FacilityTypes.VOLLEYBALL, label: "Siatkówka" },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        setIsLoading(true);
        const copiedObject = (({ latitude, longitude, ...rest }) => rest)(
          values
        );
        const preparedValues = {
          ...copiedObject,
          coordinates: {
            latitude: values.latitude,
            longitude: values.longitude,
          },
          isOccupied: false,
          occupiedTime: null,
          active: false,
        };
        createFacility(preparedValues)
          .then((res) => {
            if (!res?.error) {
              setIsLoading(false);
              setIsAdded(true);
              resetForm({ values: initialValues });
            } else {
              setIsLoading(false);
              setIsError(true);
            }
          })
          .catch((err) => {
            setIsLoading(false);
            setIsError(true);
          });
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
      }) => (
        <StyledForm onSubmit={handleSubmit}>
          <FormField
            label="Miejscowość *"
            name="city"
            placeholder="Jastrzębia"
          />
          <FormField
            label="Kod pocztowy *"
            name="ZIPCode"
            placeholder="12-345"
          />
          <FormField
            label="Adres *"
            name="address"
            placeholder="ul. Ulica 12"
          />
          <FormField
            label="Przeznaczenie *"
            name="purpose"
            as="select"
            options={purposeOptions}
          />
          <FormField
            label="E-mail *"
            name="email"
            type="email"
            placeholder="example@email.com"
            additionalInfo="W celu założenia konta w późniejszej wersji aplikacji"
          />
          <FormField
            label="Hasło *"
            name="password"
            type="password"
            placeholder="******"
            additionalInfo="W celu założenia konta w późniejszej wersji aplikacji"
          />
          <FormField
            label="Opis"
            name="description"
            as="textarea"
            placeholder="czynne całą dobę"
          />
          <FormField
            label="Google Plus Code"
            name="googlePlusCode"
            placeholder="kod z map google"
          />
          <FormField
            label="Szerokość geograficzna *"
            name="latitude"
            placeholder="12.34567"
            additionalInfo="Zaznacz na mapie żeby uzupełnić"
          />
          <FormField
            label="Długość geograficzna *"
            name="longitude"
            placeholder="76.54321"
            additionalInfo="Zaznacz na mapie żeby uzupełnić"
          />

          <small>Przeciągnij marker na mapie, żeby zaznaczyć</small>
          <FormMap values={values} handleChange={handleChange} />

          {isError && !isLoading ? (
            <ErrorMessage errorType={ErrorMessagesType.FETCH_ERROR_MESSAGE} />
          ) : null}
          {isAdded && !isLoading ? (
            <StyledOkMessage>Obiekt dodany</StyledOkMessage>
          ) : null}
          <StyledSubmitButton disabled={isLoading} type="submit">
            Dodaj
          </StyledSubmitButton>
        </StyledForm>
      )}
    </Formik>
  );
};

const StyledForm = styled.form`
  width: 95%;
  max-width: 500px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
`;

const StyledSubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.quickBookingFormButtonBg};
  color: ${({ theme }) => theme.colors.quickBookingFormButtonText};
  padding: 10px;
  border: none;
  border-radius: 7px;
  font-size: ${({ theme }) => theme.fontSizes.button};
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;

  &:disabled {
    opacity: 0.4;
  }
`;

const StyledOkMessage = styled.p`
  color: ${({ theme }) => theme.colors.okText};
  background-color: ${({ theme }) => theme.colors.okBg};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.paragraphError};
  width: fit-content;
  max-width: 95%;
  text-align: center;
  margin: 40px auto auto auto;
  padding: 5px 8px;
  border-radius: 8px;
`;

export default CreateFacilityForm;
