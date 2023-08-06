import {
  Container,
  AvatarContainer,
  Image,
  InfoContainer,
  StreamerName,
  StreamerPlatform,
  StreamerDescription,
  StreamerRating,
  VotesItem,
  VotesCount,
} from "./EventItem.styled";

export const EventItem = ({ event }) => {
  const { baner, title, description, place, data, time, category, priority } =
		event;

  return (
    <Container>
      <AvatarContainer>
        <Image src={require(`../../${baner}`)} alt={title} />
      </AvatarContainer>
      <InfoContainer>
        <StreamerName>{title}</StreamerName>
        <StreamerDescription>{description}</StreamerDescription>
        <StreamerPlatform>{place}</StreamerPlatform>
        <StreamerPlatform>{data}</StreamerPlatform>
        <StreamerPlatform>{time}</StreamerPlatform>
      </InfoContainer>
      <StreamerRating>
        <VotesItem>
          <VotesCount>{category}</VotesCount>
        </VotesItem>
        <VotesItem>
          <VotesCount>{priority}</VotesCount>
        </VotesItem>
      </StreamerRating>
    </Container>
  );
};
