import { Grid } from '@mui/material';
import { IMediaItem } from '../../services/NasaService/types';
import Card from '../Card';

interface CardListProps {
    list: IMediaItem[];
}
const CardList = ({ list }: CardListProps) => {
    return (
        <Grid container spacing={1} paddingTop="30px">
            {list.map((item) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    key={item.data[0].nasa_id}
                >
                    <Card photo={item} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CardList;
