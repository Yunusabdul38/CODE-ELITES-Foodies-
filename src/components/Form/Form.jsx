import {useEffect} from 'react'

export default function Form() {
  useEffect(() => {
    document.title = "Sign up";

    return () => (document.title = "welcome to Foodies");
  });
  return (
    <div>Form</div>
  )
}
