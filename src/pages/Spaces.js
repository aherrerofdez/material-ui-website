import Header from '../components/Header'
import ImageListItem from '@mui/material/ImageListItem'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const itemData = [
  {img: 'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: 'Big Blue Co-Working Space'},
  {img: 'https://images.unsplash.com/photo-1600765728673-7b4aa76cc3ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Plants Co-Working Space'},
  {img: 'https://images.unsplash.com/photo-1604328727766-a151d1045ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Small Co-Working Space'},
  {img: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Open Space Co-working Space'},
  {img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    title: 'Big Meeting Room'},
  {img: 'https://images.unsplash.com/photo-1532916123995-50bad0fc528e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Small Meeting Room'}]

export default function Booking() {
  return (
    <>
      <Header />
      <Grid container spacing={0} sx = {{ marginBottom: 3 }}>
          {itemData.map((item) => (
            <Grid item xs={12} sm={4} sx = {{ paddingLeft: 3, paddingRight: 3, paddingTop: 3 }}>
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading= 'lazy' />
            </ImageListItem>
            <Typography sx = {{ fontWeight: 'bold', fontSize: '18pt', textAlign: 'center' }}>
              {item.title} 
            </Typography>
            <Typography sx = {{ fontSize: '16pt', textAlign: 'center' }}>
              <Link href="/booking" sx = {{ fontWeight: 'bold' }}>Book</Link> this space now.
            </Typography>
            </Grid>
          ))}
      </Grid>
    </>
  )
}