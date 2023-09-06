// Custom Upload Adapter
import { API_UPLOAD_IMAGE } from "~/src/constant/api";

export class UploadAdapter {
  loader: any;

  constructor(loader) {
    this.loader = loader;
  }

  async upload() {
    return this.loader.file.then((file) => {
      const data = new FormData();
      data.append("ImageFile", file);
      const genericError = `Couldn't upload file: ${file.name}.`;

      // post image with fetch
      return fetch(API_UPLOAD_IMAGE, {
        method: "POST",
        body: data,
        credentials: "same-origin",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        // headers: {
        //   "Content-Type": "application/json",
        // },
      })
        .then((response) => response.json())
        .then((res) => {
          console.log("imageUrl", res?.imageUrl);
          return { default: res?.imageUrl };
        })
        .catch((error) => {
          console.log("error", error);
          Promise.reject(error?.message ?? genericError);
        });
    });
  }

  abort() {
    return Promise.reject();
  }
}

// CKEditor FileRepository
export function uploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) =>
    new UploadAdapter(loader);
}
