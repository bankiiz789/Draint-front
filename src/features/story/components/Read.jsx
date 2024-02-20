import React from "react";
import {
  CrownIcon,
  FavIcon,
  FavOutlineIcon,
  LockIcon,
  StarIcon,
} from "../../../icons";
import Avatar from "../../auth/components/Avatar";
import coverPhotoDefault from "../../../assets/cover-photo.png";
import CommentContainer from "../../comment/components/CommentContainer";
import * as StoryApi from "../../../api/story-api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useStory from "../hooks/useStory";
import useAuth from "../../auth/hooks/use-auth";

function Read() {
  const { authUser } = useAuth();
  const { toggleFav } = useStory();
  const { storyId } = useParams();
  const [targetStory, setTargetStory] = useState();
  const [ownerUser, setOwnerUser] = useState();

  const [isFavorite, setIsFavorite] = useState(
    targetStory?.Favorites.find((fav) => fav?.userId == authUser?.id)
  );

  const handleFavClick = async () => {
    await toggleFav(targetStory.id);
    setIsFavorite((prev) => !prev);
  };

  useEffect(() => {
    StoryApi.getTargetStory(storyId)
      .then((res) => {
        setTargetStory(res.data.storyTarget);
        setOwnerUser(res.data.storyTarget.user);
        // console.log(res.data.storyTarget.user, ";;;;;;;;;;;;;;;;;;;;;");
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(targetStory);
  console.log(ownerUser);

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl min-h-screen my-8">
        <figure className="bg-amber-400 h-[300px]">
          <img src={targetStory?.coverImage || coverPhotoDefault}></img>
        </figure>
        <div className="card-body">
          {/* category and staff pick */}
          <div className="flex justify-between">
            <div>{targetStory?.category}</div>
            <div>{targetStory?.staffPick ? <StarIcon /> : null}</div>
          </div>
          {/* header */}
          <div className="flex justify-between">
            <div className="flex items-center gap-2 ">
              <h2 className="card-title font-black text-2xl">
                {targetStory?.title}
              </h2>
              <h2 className="btn btn-ghost">
                <LockIcon />
              </h2>
            </div>
          </div>
          {/* content */}
          <div className="min-h-[800px] ">
            <p dangerouslySetInnerHTML={{ __html: targetStory?.content }}></p>
          </div>
          {/* footer */}
          <div className="flex justify-between items-center">
            <div>
              <div className="flex gap-2 items-center">
                {/* <Link to={`/profile/${id}`}> */}
                <Avatar size="w-10" src={ownerUser?.profileImage} />
                {/* </Link> */}
                <div>{ownerUser?.userName}</div>
                <div>
                  <CrownIcon />
                </div>
              </div>
              <div className="text-gray-500 font-bold ps-2 pt-2">1hr</div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div onClick={handleFavClick}>
                {isFavorite ? <FavIcon /> : <FavOutlineIcon />}
              </div>
              <div>{targetStory?.totalFav} recommended</div>
            </div>
          </div>
          {/* comment */}
          <CommentContainer />
        </div>
      </div>
    </div>
  );
}

export default Read;
