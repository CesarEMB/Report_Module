interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> { }

const TailLabel = ({ children, ...props }: Props) => {
  return(
<label
    className="block text-sm font-medium leading-6 text-gray-900"
    {...props}
  >
    {children}
  </label>
  )
}

export  {TailLabel}