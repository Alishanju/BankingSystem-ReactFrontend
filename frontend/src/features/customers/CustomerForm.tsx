import { useEffect, useState } from "react";

import type { Customer } from "../../types/Customer";

import CustomerService from "../../services/CustomerService";

import styles from "./CustomerForm.module.scss";

interface Props {

    customer: Customer | null;

    onClose: () => void;

    onSuccess: () => void;

}

function CustomerForm({

    customer,

    onClose,

    onSuccess

}: Props) {

    const [formData, setFormData] = useState({

        name: "",

        email: "",

        phone: "",

        username: "",

        password: ""

    });

    useEffect(() => {

        if (customer) {

            setFormData({

                name: customer.name,

                email: customer.email,

                phone: customer.phone,

                username: customer.username,

                password: ""

            });

        }

    }, [customer]);

    const handleChange = (

        e: React.ChangeEvent<HTMLInputElement>

    ) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (

        e: React.FormEvent

    ) => {


            e.preventDefault();

    console.log(formData);


        if (customer) {

            await CustomerService.updateCustomer(

                customer.id,

                formData

            );

        }

        else {

            await CustomerService.addCustomer(

                formData

            );

        }

        onSuccess();

        onClose();

    };

    return (

        <div className={styles.overlay}>

            <div className={styles.modal}>

                <h2>

                    {

                        customer

                            ?

                            "Edit Customer"

                            :

                            "Add Customer"

                    }

                </h2>

                <form

                    onSubmit={handleSubmit}

                >

                    <input

                        name="name"

                        placeholder="Name"

                        value={formData.name}

                        onChange={handleChange}

                    />

                    <input

                        name="email"

                        placeholder="Email"

                        value={formData.email}

                        onChange={handleChange}

                    />

                    <input

                        name="phone"

                        placeholder="Phone"

                        value={formData.phone}

                        onChange={handleChange}

                    />

                    <input

                        name="username"

                        placeholder="Username"

                        value={formData.username}

                        onChange={handleChange}

                    />

                    {

                        !customer &&

                        <input

                            type="password"

                            name="password"

                            placeholder="Password"

                            value={formData.password}

                            onChange={handleChange}

                        />

                    }

                    <div className={styles.actions}>

                        <button

                            type="submit"

                        >

                            Save

                        </button>

                        <button

                            type="button"

                            onClick={onClose}

                        >

                            Cancel

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default CustomerForm;