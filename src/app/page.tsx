"use client"
import { OListItem } from "@/components/listComponentes"
import ThemeContainer from "@/components/themes"
import { Book } from "@mui/icons-material"
import { Grid, List } from "@mui/material"

export default function App() {
  return (
    <ThemeContainer maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <List>
            <OListItem
              icon={<Book />}
              title={"Tutoriales de guitarra"}
              link={"/tutorials/guitar"}
            />
          </List>
        </Grid>
      </Grid>
    </ThemeContainer>
  )
}