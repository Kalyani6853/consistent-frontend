import { Button } from "antd"
import { PrimaryLogo } from "../../utils/icons/primary-logo"

export const NavigationBar = () => {
  return (
    <div className="flex p-2 justify-between">
      <PrimaryLogo />
      <div>
        <Button type="text" className="inter">About</Button>
        <Button type="text" className="inter">Contact</Button>
      </div>
    </div>
  )
}
