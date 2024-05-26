import { MailOutline } from "@mui/icons-material"
import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../view/"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Hola quiero sexo</Typography> */}
      <NothingSelectedView />
    </JournalLayout>
  )
}
