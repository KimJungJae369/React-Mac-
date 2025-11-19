import React from 'react'

// export default function User(props : {children : React.ReactNode}) {

// 구조 분해 할당 사용
// export default function User({children} : {children : React.ReactNode}){
//     return (
//         <>
//             {children}
//         </>
//     )
// }

// 두 값을 모두 받을 수 있도록 props 타입 정의
export default function User({
    title,
    children
}: {
    title: string,
    children: React.ReactNode
}) {
    return (
        <>
            <h1>{title}</h1>
            {children}
        </>
    )
}
