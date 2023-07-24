import { Formik } from "formik";
import * as Yup from "yup";
import { styled } from "styled-components";

import FormField from "../../components/molecules/FormField";
import FormMap from "../../components/organisms/FormMap";
import { createFacility } from "../../serviceCalls/createFacility";
import { useState } from "react";

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
    { value: "tennis", label: "Tenis" },
    { value: "soccer", label: "Piłka nożna" },
    { value: "basketball", label: "Koszykówka" },
    { value: "volleyball", label: "Siatkówka" },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
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
            console.log(res);
            setIsLoading(false);
            setIsAdded(true);
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

          <StyledSubmitButton type="submit">Dodaj</StyledSubmitButton>
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
`;

export default CreateFacilityForm;
