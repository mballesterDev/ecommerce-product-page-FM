import { Outlet } from "react-router"
import { Header } from "../components/layout/Header"

export const RootLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}
