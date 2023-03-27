import styles from './Banner.module.scss';
import banner from '../../public/assets/img/banner.png';

export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.banner__imagem}>
                <img src={banner} alt="banner da boom viagens"/>
            </div>
        </section>
    )
}