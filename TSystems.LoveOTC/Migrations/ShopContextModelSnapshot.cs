﻿// <auto-generated />
using System;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using TSystems.LoveOTC;

#nullable disable

namespace TSystems.LoveOTC.Migrations
{
    [DbContext(typeof(ShopContext))]
    partial class ShopContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.0-rc.2.23480.1")
                .HasAnnotation("Proxies:ChangeTracking", false)
                .HasAnnotation("Proxies:CheckEquality", false)
                .HasAnnotation("Proxies:LazyLoading", true)
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseHiLo(modelBuilder, "EntityFrameworkHiLoSequence");

            modelBuilder.HasSequence("EntityFrameworkHiLoSequence")
                .IncrementsBy(10);

            modelBuilder.Entity("ComboType", b =>
                {
                    b.Property<long>("CombosComboId")
                        .HasColumnType("bigint");

                    b.Property<long>("TypesTypeId")
                        .HasColumnType("bigint");

                    b.HasKey("CombosComboId", "TypesTypeId");

                    b.HasIndex("TypesTypeId");

                    b.ToTable("ComboType");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Category", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseHiLo(b.Property<long>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(15)
                        .HasColumnType("character varying(15)");

                    b.HasKey("Id");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Combo", b =>
                {
                    b.Property<long>("ComboId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseHiLo(b.Property<long>("ComboId"));

                    b.Property<long>("ProductId")
                        .HasColumnType("bigint");

                    b.Property<int>("Stock")
                        .HasColumnType("integer");

                    b.HasKey("ComboId");

                    b.HasIndex("ProductId");

                    b.ToTable("Combos");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Comment", b =>
                {
                    b.Property<long>("CommentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseHiLo(b.Property<long>("CommentId"));

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasMaxLength(1000)
                        .HasColumnType("character varying(1000)");

                    b.Property<DateTime>("CreateAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<long>("OrderId")
                        .HasColumnType("bigint");

                    b.Property<Guid?>("UserId")
                        .HasColumnType("uuid");

                    b.HasKey("CommentId");

                    b.HasIndex("OrderId");

                    b.HasIndex("UserId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Order", b =>
                {
                    b.Property<long>("OrderId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseHiLo(b.Property<long>("OrderId"));

                    b.Property<DateTime>("CreateAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("Status")
                        .HasColumnType("integer");

                    b.Property<string>("TrackingNumber")
                        .HasMaxLength(50)
                        .HasColumnType("character varying(50)");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uuid");

                    b.HasKey("OrderId");

                    b.HasIndex("UserId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.OrderCombo", b =>
                {
                    b.Property<long>("ComboId")
                        .HasColumnType("bigint");

                    b.Property<long>("OrderId")
                        .HasColumnType("bigint");

                    b.Property<byte>("Quantity")
                        .HasColumnType("smallint");

                    b.HasKey("ComboId", "OrderId");

                    b.HasIndex("OrderId");

                    b.ToTable("OrdersCombo");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Photo", b =>
                {
                    b.Property<long>("PhotoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseHiLo(b.Property<long>("PhotoId"));

                    b.Property<string>("Caption")
                        .HasMaxLength(50)
                        .HasColumnType("character varying(50)");

                    b.Property<bool?>("Cover")
                        .HasColumnType("boolean");

                    b.Property<Guid>("ObjectId")
                        .HasColumnType("uuid");

                    b.Property<byte>("Order")
                        .HasColumnType("smallint");

                    b.Property<long>("ProductId")
                        .HasColumnType("bigint");

                    b.HasKey("PhotoId");

                    b.HasIndex("ObjectId");

                    b.HasIndex("ProductId");

                    b.ToTable("Photos");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Product", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseHiLo(b.Property<long>("Id"));

                    b.Property<long?>("CategoryId")
                        .HasColumnType("bigint");

                    b.Property<JsonElement?>("Description")
                        .HasColumnType("jsonb");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("character varying(50)");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Storage", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<byte[]>("Data")
                        .IsRequired()
                        .HasColumnType("bytea");

                    b.Property<DateTime?>("Expires")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Hash")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Objects");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Type", b =>
                {
                    b.Property<long>("TypeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseHiLo(b.Property<long>("TypeId"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(15)
                        .HasColumnType("character varying(15)");

                    b.Property<long>("VariantId")
                        .HasColumnType("bigint");

                    b.HasKey("TypeId");

                    b.HasIndex("VariantId");

                    b.ToTable("Types");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.User", b =>
                {
                    b.Property<Guid>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("character varying(100)");

                    b.Property<bool?>("Admin")
                        .HasColumnType("boolean");

                    b.Property<string>("EMail")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("character varying(100)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("character varying(50)");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasMaxLength(15)
                        .HasColumnType("character varying(15)");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Variant", b =>
                {
                    b.Property<long>("VariantId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseHiLo(b.Property<long>("VariantId"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(15)
                        .HasColumnType("character varying(15)");

                    b.Property<long>("ProductId")
                        .HasColumnType("bigint");

                    b.HasKey("VariantId");

                    b.HasIndex("ProductId");

                    b.ToTable("Variants");
                });

            modelBuilder.Entity("ComboType", b =>
                {
                    b.HasOne("TSystems.LoveOTC.Models.Combo", null)
                        .WithMany()
                        .HasForeignKey("CombosComboId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("TSystems.LoveOTC.Models.Type", null)
                        .WithMany()
                        .HasForeignKey("TypesTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Combo", b =>
                {
                    b.HasOne("TSystems.LoveOTC.Models.Product", "Product")
                        .WithMany("Combos")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Product");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Comment", b =>
                {
                    b.HasOne("TSystems.LoveOTC.Models.Order", "Order")
                        .WithMany("Comments")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("TSystems.LoveOTC.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");

                    b.Navigation("Order");

                    b.Navigation("User");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Order", b =>
                {
                    b.HasOne("TSystems.LoveOTC.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.OrderCombo", b =>
                {
                    b.HasOne("TSystems.LoveOTC.Models.Combo", "Combo")
                        .WithMany("OrderCombos")
                        .HasForeignKey("ComboId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("TSystems.LoveOTC.Models.Order", "Order")
                        .WithMany("OrderCombos")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Combo");

                    b.Navigation("Order");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Photo", b =>
                {
                    b.HasOne("TSystems.LoveOTC.Models.Storage", "Object")
                        .WithMany()
                        .HasForeignKey("ObjectId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("TSystems.LoveOTC.Models.Product", "Product")
                        .WithMany("Photos")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Object");

                    b.Navigation("Product");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Product", b =>
                {
                    b.HasOne("TSystems.LoveOTC.Models.Category", "Category")
                        .WithMany("Products")
                        .HasForeignKey("CategoryId");

                    b.Navigation("Category");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Type", b =>
                {
                    b.HasOne("TSystems.LoveOTC.Models.Variant", "Variant")
                        .WithMany("Types")
                        .HasForeignKey("VariantId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Variant");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Variant", b =>
                {
                    b.HasOne("TSystems.LoveOTC.Models.Product", "Product")
                        .WithMany("Variants")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Product");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Category", b =>
                {
                    b.Navigation("Products");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Combo", b =>
                {
                    b.Navigation("OrderCombos");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Order", b =>
                {
                    b.Navigation("Comments");

                    b.Navigation("OrderCombos");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Product", b =>
                {
                    b.Navigation("Combos");

                    b.Navigation("Photos");

                    b.Navigation("Variants");
                });

            modelBuilder.Entity("TSystems.LoveOTC.Models.Variant", b =>
                {
                    b.Navigation("Types");
                });
#pragma warning restore 612, 618
        }
    }
}
