import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tab, Tabs, Button, Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cartStore";
import { getProductList } from "../store/productStore";
import ListCard from "../components/ListCard";

import "swiper/css";
import "swiper/css/scrollbar";
import "../css/Products.css";

const Products = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const [cont, setCont] = useState(1);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let productsState = useSelector((state) => state.products);
    let products = productsState.products;

    const getThisItem = async () => {
        let url = `https://my-json-server.typicode.com/shining-jung/shoppe/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setItem(data);
    };

    useEffect(() => {
        getThisItem();
    }, [id]);

    useEffect(() => {
        if (item.category) {
            dispatch(getProductList(item.category));
        }
    }, [dispatch, item.category]);

    if (productsState.status !== "scucceeded") {
        return <main className="notPage mw">로딩중...</main>;
    }

    const inputChange = (e) => {
        setCont(() => {
            return Math.max(1, Math.min(999, Number(e.target.value)));
        });
    };

    return (
        <main className="mw detail">
            <section className="productCon">
                <div className="imgCon">
                    <img src={`${process.env.PUBLIC_URL}/img/${item?.img}`} alt="{item?.title}" />
                </div>
                <div className="pInfo">
                    <h3>{item?.title}</h3>
                    {item.discount !== "0" ? (
                        <p>
                            <span>{item?.discount}% 할인</span>
                            {Number(item?.price).toLocaleString()} ￦
                        </p>
                    ) : (
                        <p>{Number(item?.price).toLocaleString()} ￦</p>
                    )}
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sequi eius facilis ex culpa voluptatem iste sit id ad perferendis nam atque, quidem saepe porro in molestias
                        vero, earum obcaecati!
                    </p>
                    <div className="cartBtnWrap">
                        {cont === 1 ? (
                            <button disabled>-</button>
                        ) : (
                            <button
                                onClick={() => {
                                    setCont(cont - 1);
                                }}>
                                -
                            </button>
                        )}
                        <input type="number" value={cont} onChange={inputChange} />
                        <button
                            onClick={() => {
                                setCont(cont + 1);
                            }}>
                            +
                        </button>
                        <button
                            onClick={() => {
                                handleShow();
                            }}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </section>
            <section className="pDesc">
                <Tabs defaultActiveKey="Description" id="fill-tab-example">
                    <Tab eventKey="Description" title="Description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        <br />
                        Aut officiis accusantium perferendis, cum, magnam at quam, <br />
                        sed dolor vero eos voluptatibus ad qui et. <br />
                        Praesentium ut natus adipisci quibusdam asperiores.
                    </Tab>
                    <Tab eventKey="Aditional" title="Aditional information">
                        Aut officiis accusantium perferendis,
                        <br /> cum, magnam at quam, sed dolor vero eos voluptatibus ad qui et.
                        <br /> Praesentium ut natus adipisci quibusdam asperiores
                    </Tab>
                    <Tab eventKey="Reviews" title="Reviews(0)">
                        voluptatibus ad qui et. Praesentium ut natus adipisci quibusdam asperiores.
                    </Tab>
                </Tabs>
            </section>

            <section>
                <Swiper pagination={true} slidesPerView={3} spaceBetween={30} modules={[Scrollbar]} className="bannerList">
                    {products.map((p) => {
                        return p.id === id ? null : (
                            <SwiperSlide key={p.id}>
                                <ListCard product={p} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </section>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {item.title} {cont}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            dispatch(
                                addItem({
                                    id: item.id,
                                    title: item.title,
                                    img: item.img,
                                    price: item.price,
                                    category: item.category,
                                    discount: item.discount,
                                    count: cont,
                                })
                            );
                            navigate("/cart");
                        }}>
                        장바구니 추가
                    </Button>
                </Modal.Footer>
            </Modal>
        </main>
    );
};

export default Products;
