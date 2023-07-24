import { ErrorMessage, Field, useFormikContext } from "formik";
import { styled } from "styled-components";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  additionalInfo?: string;
  as?: string;
  options?: {
    value: string;
    label: string;
  }[];
}

const FormField = ({
  label,
  name,
  type = "string",
  placeholder,
  additionalInfo,
  as,
  options,
}: FormFieldProps) => {
  const { getFieldProps, touched, errors } = useFormikContext();
  return (
    <SyledFieldWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <small>{additionalInfo}</small>
      <StyledField
        {...getFieldProps(name)}
        name={name}
        type={type}
        as={as}
        placeholder={placeholder}
        hasError={
          touched[name as keyof typeof touched] &&
          errors[name as keyof typeof errors]
        }
      >
        {options && options.length > 0
          ? options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))
          : null}
      </StyledField>
      <StyledErrorMessage>
        <ErrorMessage name={name} />
      </StyledErrorMessage>
    </SyledFieldWrapper>
  );
};

const SyledFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px auto;

  small {
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.smallText};
  }
`;

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.label};
`;

const StyledField = styled(Field)<{hasError: string}>`
  font-size: ${({ theme }) => theme.fontSizes.input};
  border: ${({ hasError }) => hasError ? "1px solid red" : "none"};
  border-radius: 8px;
  padding: 10px;
  margin: 3px auto;
  width: 100%;

  &::placeholder {
    opacity: 0.5;
  }
`;

const StyledErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.errorText};
  /* background-color: ${({ theme }) => theme.colors.errorBg}; */
  padding: 5px 7px;
  border-radius: 5px;
`;

export default FormField;
