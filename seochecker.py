import requests
from bs4 import BeautifulSoup

def seo_checker(url):
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')

        # Title
        title = soup.title.string if soup.title else 'Tidak ada title tag'

        # Meta description
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        description = meta_desc['content'] if meta_desc and 'content' in meta_desc.attrs else 'Tidak ada meta description'

        # Heading
        h1_tags = soup.find_all('h1')
        h2_tags = soup.find_all('h2')

        # Images without alt
        images = soup.find_all('img')
        images_without_alt = [img for img in images if not img.get('alt')]

        # Hasil
        print(f"Title       : {title}")
        print(f"Description : {description}")
        print(f"H1          : {len(h1_tags)} ditemukan")
        print(f"H2          : {len(h2_tags)} ditemukan")
        print(f"Gambar tanpa alt: {len(images_without_alt)} dari total {len(images)} gambar")

    except Exception as e:
        print(f"Terjadi error: {e}")

# Contoh pemakaian
seo_checker('https://localhost:5173/')
