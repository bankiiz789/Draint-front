import StoryCards from "../features/story/components/StoryCards";
import useAuth from "../features/auth/hooks/use-auth";
import ProfileContainer from "../features/profile/components/ProfileContainer";
import ProfileContextProvider from "../features/profile/context/ProfileContext";
import OwnStoryCard from "../features/profile/components/OwnStoryCard";
import DraftContextProvider from "../features/draft/context/DraftContext";

function ProfilePage() {
  const { authUser } = useAuth();
  return (
    <>
      <ProfileContextProvider>
        <ProfileContainer />
        <div>
          <OwnStoryCard />
        </div>
      </ProfileContextProvider>
    </>
  );
}

export default ProfilePage;
