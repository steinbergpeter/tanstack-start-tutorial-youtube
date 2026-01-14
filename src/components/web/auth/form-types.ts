import type { ComponentProps, ComponentType, ReactNode } from 'react'
import type { AnyFormApi, AnyFieldApi } from '@tanstack/react-form'

export type FormFieldType = {
  id: string
  label: string
  type: 'text' | 'email' | 'password'
  placeholder?: string
  required: boolean
  description?: string
}

export interface FormProps extends ComponentProps<'div'> {
  className?: string
}

///
// Field configuration type
export interface FieldConfig {
  type?: string
  placeholder?: string
  label: string
}

// Generic props for FormField so it can be reused for different form data shapes
export interface FormFieldProps<TFormData> {
  // Use the library-provided `AnyFormApi` for the runtime form API and also
  // type the `Field` component that is attached to the React form wrapper.
  form: AnyFormApi & {
    Field: ComponentType<{
      name: string
      children: (field: AnyFieldApi) => ReactNode
    }>
  }
  fieldName: keyof TFormData
  type?: string
  placeholder?: string
  label: string
}
