import React from 'react'

const Gtag = () => {
  const isBrowser = typeof window !== "undefined"

  return (
    <>
    {isBrowser ? (
      <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-2MRGGEC7MM"></script>
      <script>
        {/* @ts-ignore */}
        {window.dataLayer = window.dataLayer || []}
        {/* @ts-ignore */}
        {function gtag(){dataLayer.push(arguments);}}
        {/* @ts-ignore */}
        {gtag('js', new Date())}
        {/* @ts-ignore */}
        {gtag('config', 'G-2MRGGEC7MM')}
        {/* @ts-ignore */}
      </script><select name="" id="" disabled="disabled"></select>
      </>
    ): (
      <></>
    )}
    </>
  )
}

export default Gtag