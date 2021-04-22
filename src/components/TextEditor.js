import { Button, CircularProgress, Hidden, LinearProgress, makeStyles, Typography } from "@material-ui/core";
import { convertToRaw } from "draft-js";
import MUIRichTextEditor from "mui-rte";
import { useEffect, useState } from "react";

function TextEditor() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");
  const [readOnly, setReadOnly] = useState(true);
  const [toolbar, setToolbar] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [content2, setcontent2] = useState("");

  const useStyles = makeStyles((theme) => ({
    loader: {
      margin: "0 auto",
      textAlign: "center",
      marginTop: "80px",
      marginBottom: "80px"
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    searchItem();
  }, []);

  const searchItem = async () => {
    setLoading(true);
    const url = `https://next-mysql-olive.vercel.app//api/get-entry?id=3`;
    const fetchItem = await fetch(url);
    const item = await fetchItem.json();
    setContent(item.content);
    setLoading(false);
  };

  const editContent = (e) => {
    setReadOnly(false);
    setToolbar(true);
  };

  const handleContentChange = (e) => {
    const rteContent = convertToRaw(e.getCurrentContent());
    setcontent2(JSON.stringify(rteContent));
  };

  const saveContent = async () => {
    // const contentbody = JSON.stringify(content2)
    setSubmitting(true);
    const url = "https://next-mysql-olive.vercel.app/api/edit-entry";
    const body = { id: 3, title: "app", content: content2 };

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setSubmitting(false);
        setReadOnly(true);
        setToolbar(false);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      {loading ? (
        <div className={classes.loader}>
          <CircularProgress color="secondary" size={240} thickness={1.5} />

        </div>
      ) : (
        <>
          <MUIRichTextEditor
            id="rte-home"
            label="Type something here..."
            defaultValue={content}
            readOnly={readOnly || submitting}
            onSave={saveContent}
            toolbar={toolbar}
            onChange={handleContentChange}
          />
          <Hidden xlDown={toolbar}>
            <Button variant="contained" color="primary" onClick={editContent}>
              editar contenido
            </Button>
          </Hidden>
          <Hidden xlDown={!toolbar}>
            <Button
              variant="contained"
              color="primary"
              onClick={saveContent}
              disabled={submitting}
            >
              {submitting ? (
                <div>
                  <Typography>Guardando</Typography>
                  <LinearProgress />
                </div>
                
              ) : (
                "Guardar"
              )}
            </Button>
          </Hidden>
        </>
      )}
    </>
  );
}
export default TextEditor;
