import { Card, CardBody, UncontrolledCollapse } from "reactstrap";
import { Reply } from "./Reply";

export const RenderReplies = ({
  replies,
  nestedReplies,
  formatDate,
  currentUser,
  setReplies,
}) => {
  return (
    <div>
      {replies.map((reply) => (
        <div key={reply.id}>
          <Reply
            reply={reply}
            formatDate={formatDate}
            nestedReplies={nestedReplies}
            currentUser={currentUser}
            setReplies={setReplies}
          />
          {nestedReplies.some((nr) => nr.replyId === reply.id) && (
            <div>
              <UncontrolledCollapse toggler={`#nested-toggler-${reply.id}`}>
                <Card id="render-card">
                  <CardBody>
                    <RenderReplies
                      replies={nestedReplies.filter(
                        (nestedReply) => nestedReply.replyId === reply.id
                      )}
                      nestedReplies={nestedReplies}
                      formatDate={formatDate}
                      currentUser={currentUser}
                      setReplies={setReplies}
                    />
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
