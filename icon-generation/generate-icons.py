from PIL import Image, ImageDraw, ImageFont

# Generate images with black background and white text
def generate_image(text, file_name):
    img_size = (256, 256)
    background_color = (0, 0, 0)
    text_color = (255, 255, 255)

    img = Image.new('RGB', img_size, background_color)

    draw = ImageDraw.Draw(img)

    # Load the Inter font with a size of 222 points
    font = ImageFont.truetype("Inter-Regular.ttf", 222)

    # Calculate the text size and position to center it
    text_bbox = draw.textbbox((0, 0), text, font)
    text_size = (text_bbox[2] - text_bbox[0], text_bbox[3] - text_bbox[1])
    text_position = (
        (img_size[0] - text_size[0]) // 2,
        (img_size[1] - text_size[1]) // 2 - font.getmetrics()[1] // 1
    )

    draw.text(text_position, text, font=font, fill=text_color)

    img.save(file_name)

# Generate image with letter B
generate_image('B', 'icons/icon.png')

# Generate images with numbers 0 to 10
for i in range(11):
    generate_image(str(i), f'icons/{i}.png')
