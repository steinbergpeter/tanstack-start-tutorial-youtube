import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import type { FormFieldProps } from './form-types'
import type { AnyFieldApi } from '@tanstack/react-form'

function FormField<TFormData>({
  form,
  fieldName,
  type = 'text',
  placeholder,
  label,
}: FormFieldProps<TFormData>) {
  return (
    <form.Field
      name={String(fieldName)}
      children={(field: AnyFieldApi) => {
        const isInvalid =
          field.state.meta.isTouched && !field.state.meta.isValid
        return (
          <Field data-invalid={isInvalid}>
            <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
            <Input
              id={field.name}
              name={field.name}
              value={String(field.state.value ?? '')}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              aria-invalid={isInvalid}
              placeholder={placeholder}
              type={type}
              autoComplete="off"
            />
            {isInvalid && <FieldError errors={field.state.meta.errors} />}
          </Field>
        )
      }}
    />
  )
}

export default FormField
