import { PRODUCT_CATEGORY } from "../../../utils/constants";

const productFields = [
    {
      id: "productCode",
      title: "Product Code",
      placeholder: "Product code",
      type: "input",
      required: true,
    },
    {
      id: "productName",
      title: "Product name",
      placeholder: "Product name",
      type: "input",
      required: true,
    },
    {
      id: "MRP",
      title: "MRP",
      placeholder: "MRP",
      type: "number",
      required: true,
    },
    {
      id: "retailPrice",
      title: "Retail price",
      placeholder: "Retail price",
      type: "number",
      required: true,
    },
    {
      id: "purchasePrice",
      title: "Purchase price",
      placeholder: "Purchase price",
      type: "number",
      required: true,
    },
    {
      id: "HSNCode",
      title: "HSN code",
      placeholder: "HSN code",
      type: "input",
      required: true,
    },
    {
      id: "GST_Percentage",
      title: "GST Percentage",
      placeholder: "GST Percentage",
      type: "select",
      options: [
        { key: "0", value: 0 },
        { key: "5", value: 5 },
        { key: "12", value: 12 },
        { key: "18", value: 18 },
        { key: "28", value: 28 },
      ],
      required: true,
    },
    {
      id: "productCategory",
      title: "Product category",
      placeholder: "Product category",
      options: Object.entries(PRODUCT_CATEGORY).map(([key, value]) => {
        return { key: value, value: key}
      }),
      type: "select",
      required: true,
    },
    {
      id: "quantity",
      title: "Quantity",
      placeholder: "Quantity",
      type: "number",
      required: true,
    },
    {
      id: "barcode",
      title: "Barcode",
      placeholder: "Barcode",
      type: "number",
      maxLength: 12,
      required: true,
    },
    {
      id: "maxAllowedQty",
      title: "Max allowed quantity",
      placeholder: "Max allowed quantity",
      type: "number",
      required: true,
      min: 1
    },
    {
      id: "UOM",
      title: "UOM",
      placeholder: "UOM",
      type: "input",
      required: true,
    },
    {
      id: "packQty",
      title: "Pack quantity",
      placeholder: "Pack quantity",
      type: "number",
      required: true,
    },
    {
      id: "length",
      title: "Length",
      placeholder: "Length",
      type: "input",
      required: true,
    },
    {
      id: "breadth",
      title: "Breadth",
      placeholder: "Breadth",
      type: "input",
      required: true,
    },
    {
      id: "height",
      title: "Height",
      placeholder: "Height",
      type: "input",
      required: true,
    },
    {
      id: "weight",
      title: "Weight",
      placeholder: "Weight",
      type: "input",
      required: true,
    },
    {
      id: "returnWindow",
      title: "Return Window",
      placeholder: "Return Window",
      type: "input",
      required: true,
    },
    {
      id: "manufacturerName",
      title: "Manufacturer name",
      placeholder: "Manufacturer name",
      type: "input",
      required: true,
    },
    {
      id: "manufacturedDate",
      title: "Manufactured date",
      placeholder: "Manufactured date",
      type: "input",
      required: true,
    },
    {
      id: "nutritionalInfo",
      title: "Nutritional info",
      placeholder: "Nutritional info",
      type: "input",
      required: true,
    },
    {
      id: "additiveInfo",
      title: "Additive info",
      placeholder: "Additive info",
      type: "input",
      required: true,
    },
    {
      id: "instructions",
      title: "Instructions",
      placeholder: "Instructions",
      type: "input",
      required: true,
    },
    {
      id: "longDescription",
      title: "Long description",
      placeholder: "Long description",
      type: "input",
      required: true,
    },
    {
      id: "description",
      title: "Short description",
      placeholder: "Short description",
      type: "input",
      required: true,
    },
    {
      id: "isCancellable",
      title: "Cancellable",
      type: "radio",
      options: [
        { key: "Yes", value: true },
        { key: "No", value: false },
      ],
      required: true,
    },
    {
      id: "isReturnable",
      title: "Returnable",
      type: "radio",
      options: [
        { key: "Yes", value: true },
        { key: "No", value: false },
      ],
      required: true,
    },
    {
      id: "isVegetarian",
      title: "Vegetarian",
      type: "radio",
      options: [
        { key: "Yes", value: true },
        { key: "No", value: false },
      ],
      required: true,
    },
    {
      id: "availableOnCod",
      title: "Available on Cash on delivery",
      type: "radio",
      options: [
        { key: "Yes", value: true },
        { key: "No", value: false },
      ],
      required: true,
    },
    {
      id: "images",
      title: "Images",
      type: "upload",
      multiple: true,
      file_type: "product_image",
      required: true,
    },
];

export default productFields