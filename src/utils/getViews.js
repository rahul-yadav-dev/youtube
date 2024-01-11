export function getViews(views) {
  let noOfViews;
  if (views > 1000000) noOfViews = `${Math.floor(views / 1000000)}M`;
  else if (views > 1000) noOfViews = `${Math.floor(views / 1000)}K`;
  else noOfViews = views;
  return noOfViews;
}
