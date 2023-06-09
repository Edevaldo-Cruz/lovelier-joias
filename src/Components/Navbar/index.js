import { AutoComplete, Input, Button, Drawer, Popover, Collapse } from "antd";
import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineShopping,
  AiOutlineSearch,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import logo from "../../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ modo }) => {
  //Autocomplete
  const getRandomInt = (max, min = 0) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  const searchResult = (query) =>
    new Array(getRandomInt(5))
      .join(".")
      .split(".")
      .map((_, idx) => {
        const category = `${query}${idx}`;
        return {
          value: category,
          label: (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>
                Found {query} on{" "}
                <a
                  href={`https://s.taobao.com/search?q=${query}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {category}
                </a>
              </span>
              <span>{getRandomInt(200, 100)} results</span>
            </div>
          ),
        };
      });

  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };
  const onSelect = (value) => {
    console.log("onSelect", value);
  };

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  //Drawer
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };
  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  //Popover
  const text = <span>Title</span>;
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  //Collapse
  const { Panel } = Collapse;
  const textCollapse = (
    <p
      style={{
        paddingLeft: 24,
      }}
    >
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.
    </p>
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBlock: "0.2rem",
          paddingInline: "1rem",
          backgroundColor: "#EFD6D1",
        }}
      >
        <div style={{ width: "6rem" }}>
          <div onClick={showDrawer}>
            <AiOutlineMenu size={25} color="#7E2228" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{ maxWidth: "45%", height: "auto" }}
            src={logo}
            alt="Logo lovelier joias"
          />
        </div>
        {modo === "user" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "6rem",
            }}
          >
            <AiOutlineSearch size={25} color="#7E2228" />

            {/* <Collapse bordered={false} defaultActiveKey={["1"]}>
            <Panel
              showArrow={false}
              header={<AiOutlineSearch size={25} color="#7E2228" />}
              key="1"
            >
              {textCollapse}
            </Panel>
          </Collapse> */}

            <Popover
              placement="bottomLeft"
              title={text}
              content={content}
              trigger="click"
            >
              <AiOutlineShopping size={25} color="#7E2228" />{" "}
            </Popover>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "6rem",
            }}
          >
            <div onClick={handleGoBack}>
              <BiArrowBack size={25} color="#7E2228" />
            </div>
            {modo === "adm" ? (
              <></>
            ) : (
              <Link
                to={
                  modo === "AdicionarProduto"
                    ? "/adicionarProduto"
                    : "/adicionarCategoria"
                }
              >
                <AiOutlineAppstoreAdd size={25} color="#7E2228" />
              </Link>
            )}
          </div>
        )}
      </div>
      {/* <AutoComplete
        dropdownMatchSelectWidth={252}
        style={{
          width: 300,
        }}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
        theme="dark"
      >
        <Input.Search
          size="large"
          placeholder="input here"
          enterButton
          theme="dark"
        />
      </AutoComplete> */}

      <Drawer
        title="Multi-level drawer"
        width={"80vw"}
        closable={false}
        onClose={onClose}
        open={open}
        placement={"left"}
      >
        <Link to="/loginAdm" type="primary" onClick={showChildrenDrawer}>
          Login Administrativo
        </Link>
        <Drawer
          title="Two-level Drawer"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
          This is two-level drawer
        </Drawer>
      </Drawer>
    </>
  );
};

export default Navbar;
