type errorMessageProps = {
  children: React.ReactNode;
};
//prettier-ignore
export default function ErrorMessage({children}:errorMessageProps ){
  return(
    <p className="bg-red-50 text-red-600 p-3 uppercase text-sm font-bold text-center">{children}</p>
  )
}
