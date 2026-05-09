import { useEffect } from "react";
import { useOrder } from "../store/orderStore";
import { noodles, toppings, proteins, spiceLevels } from "../data/menuData";
import styles from "./SpinScreen.module.css";

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function SpinScreen({ onDone }) {
  const { dispatch } = useOrder();

  useEffect(() => {
    // 랜덤 선택 즉시 계산
    const randomNoodle = pick(noodles);
    const randomToppings = Object.values(toppings).map((group) => pick(group.items));
    const randomProtein = pick(proteins);
    const randomSpice = pick(spiceLevels);
    const randomPeanut = Math.random() > 0.5;
    const randomMayu = Math.random() > 0.6 ? 1 : 0;

    // 애니메이션 후 결과 반영
    const timer = setTimeout(() => {
      dispatch({ type: "SET_NOODLE", payload: randomNoodle });
      dispatch({ type: "SET_TOPPINGS", payload: randomToppings });
      dispatch({ type: "SET_PROTEIN", payload: randomProtein });
      dispatch({ type: "SET_SPICE", payload: randomSpice });
      dispatch({ type: "SET_PEANUT_SAUCE", payload: randomPeanut });
      dispatch({ type: "SET_MAYU", payload: randomMayu });
      onDone();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.spinBox}>
        <div className={styles.reels}>
          {["🍜", "🥩", "🌶️", "✨", "🎲"].map((emoji, i) => (
            <div key={i} className={styles.reel} style={{ animationDelay: `${i * 0.1}s` }}>
              {emoji}
            </div>
          ))}
        </div>
        <p className={styles.label}>뽑는 중...</p>
        <p className={styles.sub}>오늘의 마라 조합을 찾고 있어 ✦</p>
      </div>
    </div>
  );
}
