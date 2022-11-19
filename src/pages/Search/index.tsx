import CardList from '../../components/CardList';
import { useMediaContext } from '../../context';

const Search = () => {
    const { list } = useMediaContext();

    return <CardList list={list} />;
};

export default Search;
