import { Button, FormGroup, Label } from "reactstrap";

export const UploadWidget = ({ setImageUrl, imageUrl, user, recipe }) => {
  //Cloudinary code
  const handleUploadWidget = (clickEvent) => {
    clickEvent.preventDefault();
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "embereats",
        uploadPreset: "s7zcsica",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImageUrl(result.info.url);
        }
      }
    );
    widget.open();
  };

  return (
    <div className="upload-container">
      <FormGroup>
        {imageUrl && (
          <div>
            <Label>Uploaded Image:</Label>
            <img src={imageUrl} alt="Uploaded" />
          </div>
        )}
        {!imageUrl && user?.image && (
          <div>
            <p>Current Image:</p>
            <img src={user.image} alt="Current" />
          </div>
        )}
        {!imageUrl && recipe?.image && (
          <div>
            <p>Current Image:</p>
            <img src={recipe.image} alt="Current" />
          </div>
        )}

        <Button onClick={(clickEvent) => handleUploadWidget(clickEvent)}>
          {!imageUrl && (recipe?.image || user?.image)
            ? "Change image"
            : "Choose image"}
        </Button>
      </FormGroup>
    </div>
  );
};
