import { Typography } from "@mui/material"

const PageTitle = ({ title, Component }) => {
  return(
    <>
      <Typography variant="h3">
        {title}
      </Typography>
      <Component />
    </>
  )
}

export default PageTitle