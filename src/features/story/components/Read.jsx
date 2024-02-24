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
import * as StaffApi from "../../../api/staff-api";
import Spinner from "../../../components/Spinner";
import formatTimeAgo from "../../../utils/time-ago";

function Read() {
  const { authUser } = useAuth();
  const { createFav, deleteFav, createComment, staffPick } = useStory();
  const { storyId } = useParams();
  const [targetStory, setTargetStory] = useState();
  const [ownerUser, setOwnerUser] = useState();
  const [loading, setLoading] = useState(false);
  const [isFav, setIsFav] = useState(false);

  const filterFav = targetStory?.Favorites?.filter(
    (fav) => fav?.userId == authUser?.id
  );

  console.log(filterFav);

  const handleStaffPick = async () => {
    try {
      setLoading(true);
      const data = {
        storyId: targetStory?.id,
        staffPick: true,
      };
      await staffPick(data);
      fetchGetTargetStory();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handleStaffUnPick = async () => {
    try {
      setLoading(true);
      const data = {
        storyId: targetStory?.id,
        staffPick: false,
      };
      await staffPick(data);
      fetchGetTargetStory();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  console.log(targetStory);
  const handleFavClick = async () => {
    if (filterFav.length == 0) {
      await createFav(+storyId);
      fetchGetTargetStory();
    } else {
      await deleteFav(+storyId);
      fetchGetTargetStory();
    }
  };

  function fetchGetTargetStory() {
    StoryApi.getTargetStory(storyId)
      .then((res) => {
        setTargetStory(res.data.storyTarget);
        setOwnerUser(res.data.storyTarget.user);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchGetTargetStory();
  }, []);

  return (
    <>
      {loading && <Spinner />}
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
                {authUser?.role === "STAFF" ? (
                  <>
                    {!targetStory?.staffPick ? (
                      <button
                        className="btn bg-green-500"
                        onClick={handleStaffPick}
                      >
                        pick
                      </button>
                    ) : (
                      <button
                        className="btn bg-green-500"
                        onClick={handleStaffUnPick}
                      >
                        unpicked
                      </button>
                    )}
                  </>
                ) : null}
              </div>
            </div>
            {/* content */}
            {authUser?.type === "FREE" && targetStory?.type === "PREMIUM" ? (
              <div className=" font-bold text-amber-500">
                this content must be premium user
              </div>
            ) : (
              <>
                <div className="min-h-[800px] ">
                  <p
                    dangerouslySetInnerHTML={{ __html: targetStory?.content }}
                  ></p>
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
                    <div className="text-gray-500 font-bold ps-2 pt-2">
                      {formatTimeAgo(targetStory?.createdAt)}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <div
                      className=" cursor-pointer hover:scale-105"
                      onClick={handleFavClick}
                    >
                      {filterFav?.length === 0 ? (
                        <FavOutlineIcon />
                      ) : (
                        <FavIcon />
                      )}
                    </div>
                    <div>{targetStory?.totalFav} recommended</div>
                  </div>
                </div>

                {/* comment */}
                <CommentContainer
                  createComment={createComment}
                  comment={targetStory}
                  storyId={targetStory?.id}
                  fetchGetTargetStory={fetchGetTargetStory}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Read;
