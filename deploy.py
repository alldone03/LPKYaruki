import os
from ftplib import FTP
from dotenv import load_dotenv

# Load kredensial FTP
load_dotenv()
FTP_HOST = os.getenv("FTP_HOST")
FTP_USER = os.getenv("FTP_USER")
FTP_PASS = os.getenv("FTP_PASS")
FTP_TARGET_DIR = os.getenv("FTP_TARGET_DIR")

# Fungsi untuk upload satu file ke FTP
def upload_file(ftp, filepath, target_dir):
    with open(filepath, "rb") as file:
        remote_path = os.path.join(target_dir, os.path.basename(filepath))
        ftp.storbinary(f"STOR {remote_path}", file)

# Fungsi untuk upload seluruh folder (rekursif)
def upload_folder(ftp, folder_path, target_dir):
    for root, dirs, files in os.walk(folder_path):
        rel_path = os.path.relpath(root, folder_path)
        remote_path = os.path.join(target_dir, rel_path).replace("\\", "/")

        try:
            ftp.mkd(remote_path)
        except:
            pass  # Folder sudah ada

        for filename in files:
            local_file = os.path.join(root, filename)
            remote_file = os.path.join(remote_path, filename).replace("\\", "/")
            with open(local_file, "rb") as file:
                ftp.storbinary(f"STOR {remote_file}", file)
                print(f"⬆️  Upload {remote_file}")

# Proses utama
def main():
    print("📦 Menjalankan build Vite...")
    os.system("yarn build")

    print("🔌 Menghubungkan ke FTP...")
    ftp = FTP(FTP_HOST)
    ftp.login(FTP_USER, FTP_PASS)
    ftp.cwd(FTP_TARGET_DIR)
    
    

    print("🚀 Mulai upload ke server...")
    upload_folder(ftp, "dist", FTP_TARGET_DIR)

    ftp.quit()
    print("✅ Selesai deploy via FTP!")

if __name__ == "__main__":
    main()