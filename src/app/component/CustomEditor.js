import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import Embed from "@editorjs/embed";
import Quote from "@editorjs/quote";
import Code from "@editorjs/code";
import Link from "@editorjs/link";
import Raw from "@editorjs/raw";
import Checklist from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import Warning from "@editorjs/warning";
import Table from "@editorjs/table";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import "./index.css";

const Editor = ({ onDataChange }) => {
  const editorInstance = useRef(null);

  useEffect(() => {
    const initializeEditor = () => {
      editorInstance.current = new EditorJS({
        holder: "editorjs-container", // ID of the container element
        onChange: onDataChange,
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,

            config: {
                levels: [1, 2, 3, 4, 5, 6], // Enable support for heading levels 1 to 6
              },
          },
          list: List,
          image: {
            class: Image,
            config: {
              uploader: {
                uploadByFile(file) {
                  // Implement your image upload logic here
                  return new Promise((resolve, reject) => {
                    // Simulate uploading delay
                    setTimeout(() => {
                      const responseData = {
                        success: 1,
                        file: {
                          url: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600", // Provide the URL of the uploaded image
                        },
                      };
                      resolve(responseData);
                    }, 1000); // Simulate 1 second delay
                  });
                },
              },
              // Custom styling options for images
              styles: {
                // Add border to images
                border: "1px solid #ccc",
                // Stretch images to fit container
                stretched: true,
                // Add background to images
                background: 'url("https://example.com/background.jpg")',
              },
            },
          },
          paragraph: {
            class: Paragraph,
            inlineToolbar: true,
          },
          table: {
            class: Table,
            inlineToolbar: true,
            config: {
              rows: 2,
              cols: 3,
              withHeaderRows: false,
              withoutHeaderCols: false,
              resizable: false,
              
            }
          },
          embed: Embed,
          link: Link,
          raw: Raw,
          checklist: Checklist,
          delimiter: Delimiter,
          warning: Warning,
          quote: Quote,
          code: Code,
          marker: Marker,
          inlineCode: InlineCode,
          // Add more tools as needed
        },
      });
    };

    initializeEditor();

    return () => {
      if (editorInstance.current) {
        if (typeof editorInstance.current.destroy === "function") {
          editorInstance.current.destroy();
        }
      }
    };
  }, [onDataChange]);

  return <div id="editorjs-container"></div>;
};

export default Editor;
