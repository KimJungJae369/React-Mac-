import React from 'react'

export default function User(props: UserProps) {
  const {
    UserObj: { name, age } = {},
    clickHandler,
  } = props || {};
  return (
    <>
      <h4>name : {name}</h4>
      <h5>age : {age}</h5>
      <button onClick={clickHandler}>클릭하세요</button>
    </>
  )
}
