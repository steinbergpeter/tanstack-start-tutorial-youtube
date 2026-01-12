export type FormFieldType = {
  id: string
  label: string
  type: 'text' | 'email' | 'password'
  placeholder?: string
  required: boolean
  description?: string
}

export interface FormProps extends React.ComponentProps<'div'> {
  className?: string
}
